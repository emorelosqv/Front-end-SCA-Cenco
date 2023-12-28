<template>
    <DashboardLayout>
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <div class="card">
                        <div class="card-body">
                            <bar1 id="diagramaDeBarras" :options="chartOptions1" :data="chartData1" />
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="card">
                        <div class="card-body">
                            <Line id="diagramaDeLineas" :data="lineData" :options="lineOptions" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="row my-4">
                <div class="col-md-6">
                    <div class="card">
                        <div class="card-body">
                            <Pie id="diagramaDeTorta" :options="pieOptions" :data="pieData" />
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="card">
                        <div class="card-body">
                            <PolarArea id="diagramaPolar" :data="polarData" :options="polarOptions" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </DashboardLayout>
</template>

<script setup>
import {ref, onMounted} from 'vue'
import {  Bar as bar1, Bar as bar2, Line, Pie, PolarArea } from 'vue-chartjs'
import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale,
    RadialLinearScale,
    PointElement,
    LineElement,
    ArcElement
} from 'chart.js'
import DashboardLayout from '@Layouts/DashboardLayout.vue'
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale,
    PointElement, LineElement, ArcElement, RadialLinearScale)

const chartData1 = {
    labels: ['Ene', 'Feb', 'Mar'],
    datasets: [{ label: 'Grafica uno', data: [40, 20, 12] }]
}

const chartOptions1 = {
    maintainAspectRatio: false,
    responsive: true
}

const lineData = {
    labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul'],
    datasets: [
        {
            label: 'Grafica dos',
            backgroundColor: '#f87979',
            data: [40, 39, 10, 40, 39, 80, 40]
        }
    ]
}

const lineOptions = {
    responsive: true,
    maintainAspectRatio: false
}

const pieData = {
    labels: ['PGC', 'PFT', 'Bazar', 'Textil', 'Electro',
        'Mantenimiento', 'Administracion', 'Control Perdidas'],
    datasets: [
        {
            backgroundColor: ['#0B5345', '#E46651', '#00D8FF', '#DD1B16',
                '#58D68D', '#873600', '#212F3C', '#8E44AD'],
            data: [15, 10, 40, 20, 5, 3, 2, 10]
        }
    ]
}

const pieOptions = {
    responsive: true,
    maintainAspectRatio: false
}


const polarData = {
    labels: [
        'Eating',
        'Drinking',
        'Sleeping',
        'Designing',
        'Coding',
        'Cycling',
        'Running'
    ],
    datasets: [
        {
            label: 'My First dataset',
            backgroundColor: 'rgba(179,181,198,0.2)',
            pointBackgroundColor: 'rgba(179,181,198,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(179,181,198,1)',
            data: [65, 59, 90, 81, 56, 55, 40]
        },
        {
            label: 'My Second dataset',
            backgroundColor: 'rgba(255,99,132,0.2)',
            pointBackgroundColor: 'rgba(255,99,132,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(255,99,132,1)',
            data: [28, 48, 40, 19, 96, 27, 100]
        }
    ]
}

const polarOptions = {
    responsive: true,
    maintainAspectRatio: false
}


</script>