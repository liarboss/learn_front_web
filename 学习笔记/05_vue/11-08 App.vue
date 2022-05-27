<template>
    <div>
        <School></School>
        <Student></Student>
    </div>
</template>

<script>
import Student from './11-08 Student.vue'
import School from './11-08 School2.vue'

export default {
    name: 'App',
    components: {
        School,
        Student
    }
}
</script>