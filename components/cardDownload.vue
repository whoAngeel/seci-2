<template>
  <UCard class="bg-base-100">
    <template #header>
      <h3 class="text-xl font-bold text-center">Formatos para descargar</h3>
    </template>

    <div class="flex justify-evenly">
      <button class="btn btn-primary" @click="generarPDF">
        <Icon name="vscode-icons:file-type-pdf2" class="text-2xl" />
        PDF
      </button>
      <button class="btn btn-primary" @click="generarExcel">
        <Icon name="vscode-icons:file-type-excel" class="text-2xl"  />
        Excel
      </button>

    </div>

  </UCard>
</template>

<script setup>
import axios from 'axios';
import jsPDF from 'jspdf';
// import xlsx from 'xlsx/dist/xlsx.full.min'
import * as XLSX from 'xlsx'
import autoTable from 'jspdf-autotable'
const { records } = useRecordsStore()
const props = defineProps(['startDate', "endDate"])
const toast = useToast()
const dayjs = useDayjs()

function generarPDF() {
  let pdf = new jsPDF()

  pdf.text("Reporte de todos los registros del SECI", 10, 10)
  records.forEach((registro, index) => {
    // Crear la cabecera de la tabla
    const head = [['', 'Carreras', 'Hombres', 'Mujeres', 'Total']];

    // Crear los datos de la tabla
    const body = registro.carreras.map(carrera => [
      '',
      carrera.nombre,
      carrera.hombres,
      carrera.mujeres,
      carrera.total
    ]);

    // Agregar la fila de total general al final de la tabla
    body.push(['', '', '', 'Total', registro.totalDia]);

    // Agregar título de la fecha
    autoTable(pdf, {
      head: [[`Fecha: ${registro.date}`]],
      body: [],
      theme: 'plain',
    });

    // Generar la tabla en el PDF
    autoTable(pdf, {
      head: head,
      body: body,
      startY: pdf.lastAutoTable.finalY + 5,
    });

    // Agregar un salto de página después de cada tabla excepto la última
    if (index < records.length - 1) {
      pdf.addPage();
    }
  });

  // Guardar el PDF
  pdf.save('registros.pdf');
  toast.add({ title: "Registro guardado", color: 'lime' })


}

function generarExcel() {

  const workbook = XLSX.utils.book_new();

  const sheetData = [];

  // Definir encabezados
  const header = ['Fecha', 'Carrera', 'Hombres', 'Mujeres', 'Total Día'];
  sheetData.push(header);

  records.forEach((item) => {
    item.carreras.forEach((carrera) => {
      const row = [
        item.date,
        carrera.nombre,
        carrera.hombres,
        carrera.mujeres,
        item.totalDia,
      ];
      sheetData.push(row);
    });
  });

  const worksheet = XLSX.utils.aoa_to_sheet(sheetData);
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Registros');

  let fileName = `seci_${dayjs()}.xlsx`;
  fileName = fileName.replaceAll('/', '-');

  // Generar el archivo Excel y descargarlo
  XLSX.writeFile(workbook, fileName);
}


</script>

<style></style>