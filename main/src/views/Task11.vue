<template>
    <div>
        <button @click="show">Нажмите для суммы</button>
    </div>
</template>

<script>
export default {
name: "Task11",
    data() {
        return {
            num1: 1,
            num2: 2,
        }
    },
    methods: {
	show: function() {
		alert(this.num1 + this.num2);
	}
}
};
</script>
