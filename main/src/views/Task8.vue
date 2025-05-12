<template>
    <div>
        <p class="lg-12">{{ obj.x }}</p>
        <p class="lg-12">{{ obj.y }}</p>
        <p class="lg-12">{{ obj.z }}</p>
    </div>
</template>

<script>
export default {
name: "Task8",
    data() {
        return {
            obj: {x: 1, y: 2, z: 3},
        }
    }
};
</script>
