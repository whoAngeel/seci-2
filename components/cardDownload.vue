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
      <button class="btn btn-primary">
        <Icon name="vscode-icons:file-type-excel" class="text-2xl" />
        Excel
      </button>

    </div>

  </UCard>
</template>

<script setup>
import axios from 'axios';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable'
const { records } = useRecordsStore()
const props = defineProps(['startDate', "endDate"])
const toast = useToast()

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
  toast.add({ title: "Registro guardado" })
  // pdf.text("Registro de carreras",10,10)
  // let ypos = 20

  // store.records.forEach(registro=>{
  //   pdf.text(`Fecha del registro ${registro.date}`, 10,ypos)
  //   ypos+=10

  //   registro.carreras.forEach(carrera=>{
  //     pdf.text(`${carrera.nombre} - Hombres: ${carrera.hombres}, Mujeres: ${carrera.mujeres}, Total: ${carrera.total}`, 10, ypos)
  //     ypos+=10

  //   })
  //   ypos+=10

  // })
  // pdf.save('info.pdf')

}


</script>

<style></style>