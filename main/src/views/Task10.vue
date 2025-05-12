<template>
    <button @click="show">Нажмите</button>
    <button @mouseover="showlocal">Наведите курсор</button>
</template>

<script>
export default {
    name: "Task10",
	data() {
		
	},
    methods: {
        show: function() {
            alert(new Date().toLocaleString());
        },
        showlocal: function(){
            alert(new Date().toLocaleString());
        },
    }
}
</script>
