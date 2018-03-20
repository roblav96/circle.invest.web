<!--  -->
<script lang="ts" src="./app.ts"></script>

<style lang="scss" src="@/client/styles/styles.scss"></style>
<style lang="scss" src="@/client/styles/vendors.scss"></style>
<style src="@/client/styles/styles.css"></style>

<style>
/**/

</style>

<template>
    <div id="app" :class="{ 'animated-loading': initing === true, 'animated animated-fastester fadeIn': initing === false }">
        <v-navbar></v-navbar>

        <router-view></router-view>

        <footer class="footer bg-accent py-4">
            <div class="container">
                <div class="content has-text-centered mb-2">
                    footer
                </div>
                <div class="content has-text-centered">
                    <a class="button mt-1" href="https://github.com/roblav96/circle.invest.web" target="_blank">
                        <b-icon icon="github-circle" class="" />
                        <span>Open Source</span>
                    </a>
                </div>
            </div>
        </footer>
    </div>
</template>
