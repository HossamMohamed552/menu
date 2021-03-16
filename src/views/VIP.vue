<template>
    <div>vip</div>
</template>

<script>
    export default {
        name: "VIP",
        mounted() {
            this.$router.push('./vip.pdf')
            // wi();
            window.location.reload();
        }
    }
</script>

<style scoped>

</style>