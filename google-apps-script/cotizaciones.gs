/**
 * Fluxatec – Registro de cotizaciones del sitio web en Google Sheets.
 *
 * Instalación:
 *  1. Cree una hoja de cálculo en Google Drive.
 *  2. En la hoja: Extensiones → Apps Script. Borre lo que haya y pegue este código.
 *  3. (Opcional) Escriba su correo en NOTIFY_EMAIL para recibir un aviso por cada cotización.
 *  4. Guarde (icono de disquete).
 *  5. Implementar → Nueva implementación → tipo "Aplicación web".
 *       - Ejecutar como: Yo
 *       - Quién tiene acceso: Cualquier usuario
 *     Autorice los permisos que Google solicite.
 *  6. Copie la "URL de la aplicación web" (termina en /exec) y péguela en
 *     src/composables/useQuoteForm.ts → LEADS_URL.
 *
 * Si modifica este código después, publique de nuevo con:
 * Implementar → Gestionar implementaciones → editar (lápiz) → Versión: "Nueva versión".
 * Así la URL no cambia.
 */

const SHEET_NAME = 'Cotizaciones';
const NOTIFY_EMAIL = ''; // Ej.: 'ventas@fluxatec.com' — déjelo vacío para no enviar correos

const COLUMNS = [
  ['fecha', 'Fecha'],
  ['nombre', 'Nombre'],
  ['empresa', 'Empresa'],
  ['telefono', 'Teléfono'],
  ['ciudad', 'Ciudad'],
  ['tipo', 'Tipo de proyecto'],
  ['presupuesto', 'Confirma presupuesto ≥ $30M'],
  ['detalle', 'Sobre el proyecto'],
  ['origen', 'Página'],
];

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const data = JSON.parse((e && e.postData && e.postData.contents) || '{}');

    // Campo trampa anti-spam: las personas no lo ven, los robots lo llenan.
    if (data.website) return json_({ ok: true });

    if (!data.nombre || !data.telefono || !data.tipo) {
      return json_({ ok: false, error: 'Faltan campos obligatorios' });
    }

    const row = {
      fecha: new Date(),
      nombre: clean_(data.nombre, 80),
      empresa: clean_(data.empresa, 80),
      telefono: clean_(data.telefono, 20),
      ciudad: clean_(data.ciudad, 60),
      tipo: clean_(data.tipo, 80),
      presupuesto: data.tipo === 'Compra de compresor Kaeser' ? (data.presupuesto ? 'Sí' : 'No') : '',
      detalle: clean_(data.detalle, 600),
      origen: clean_(data.origen, 200),
    };

    getSheet_().appendRow(COLUMNS.map(([key]) => row[key]));

    if (NOTIFY_EMAIL) notify_(row);

    return json_({ ok: true });
  } catch (err) {
    console.error(err);
    return json_({ ok: false, error: String(err) });
  } finally {
    lock.releaseLock();
  }
}

// Permite comprobar en el navegador que la aplicación web está publicada.
function doGet() {
  return json_({ ok: true, servicio: 'Cotizaciones Fluxatec' });
}

function getSheet_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) sheet = ss.insertSheet(SHEET_NAME);
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(COLUMNS.map(([, title]) => title));
    sheet.getRange(1, 1, 1, COLUMNS.length).setFontWeight('bold').setBackground('#FECD01');
    sheet.setFrozenRows(1);
    sheet.getRange('A:A').setNumberFormat('yyyy-mm-dd hh:mm');
  }
  return sheet;
}

// Limpia el texto y evita que se interprete como fórmula en la hoja.
function clean_(value, maxLength) {
  let text = String(value == null ? '' : value).trim().slice(0, maxLength);
  if (/^[=+\-@]/.test(text)) text = "'" + text;
  return text;
}

function notify_(row) {
  const lines = COLUMNS
    .filter(([key]) => key !== 'fecha' && row[key])
    .map(([key, title]) => `${title}: ${String(row[key]).replace(/^'/, '')}`);
  MailApp.sendEmail({
    to: NOTIFY_EMAIL,
    subject: `Nueva cotización web: ${row.tipo} – ${row.nombre.replace(/^'/, '')}`,
    body: lines.join('\n') + `\n\nVer todas: ${SpreadsheetApp.getActiveSpreadsheet().getUrl()}`,
  });
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
