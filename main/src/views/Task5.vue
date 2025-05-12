<template>
    <div>
        <h1><a :href="href">{{ text }}</a></h1>
    </div>
</template>

<script>
export default {
  name: "Task5",
  data(){
	return {
		text: 'page',
		href: 'page.html',
	}
  },

};
</script>
