<template>
    <div id="app">
        <div class="hold-buttons">
            <router-link to="/VIP" class="btn">VIP</router-link>
            <router-link to="/REG" class="btn">regular</router-link>
        </div>
        <router-view></router-view>
    </div>
</template>
<style>
    * {
        padding: 0;
        margin: 0;
        font-family: Arial;
    }

    #app {
        min-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background-image: linear-gradient(to right, rgba(0, 153, 204, 0.54), rgba(0, 153, 204, 0.70)), url("assets/restaurant-interior.jpg");
        background-repeat: no-repeat;
        background-size: cover;
    }

    .hold-buttons {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .btn {
        height: 60px;
        width: 300px;
        margin: 2rem;
        border: 2px solid #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        color: #fff;
        text-transform: uppercase;
        font-size: 1.5rem;
        font-weight: 500;
        border-radius: .25rem;
        transition: all ease-in-out .3s;
    }
    .btn:first-of-type{
        background: #fff;
        color: rgba(13, 101, 130, 0.88);
    }
    .btn:hover{
        background: rgba(13, 101, 130, 0.88);
        color: #fff;
    }
    @media (max-width: 768px) {
        .hold-buttons {
            display: block;
        }
        .btn {
            display: block;
            margin: 1rem;
            width: 270px;
            text-align: center;
            line-height: 40px;
        }
    }
</style>