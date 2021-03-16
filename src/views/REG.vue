<template>
    <div>vip</div>
</template>

<script>
    export default {
        name: "VIP",
        mounted() {
            this.$router.push('./regular.pdf')
            window.location.reload();
        }
    }
</script>

<style scoped>

</style>