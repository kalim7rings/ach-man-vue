<template>
    <div>
        <div class="is-vertical">
            <app-header></app-header>
            <Content></Content>
            <app-footer></app-footer>
        </div>
    </div>
</template>

<script>
    import Header from './HeaderComponent.vue';
    import Sidebar from './SidebarComponent.vue';
    import Content from './ContentComponent.vue';
    import Footer from './FooterComponent.vue';

    export default {
        //name: 'AdminLayout',
        components: {
            'app-header': Header,
            'app-sidebar' : Sidebar,
            Content,
            'app-footer' : Footer,
        },
        data: () => ({
           /* menuVisible: true,
            showNavigation: false,
            showSidepanel: false,
            activeIndex: '1',
            activeIndex2: '1'*/
        }),
        methods: {
            /*toggleMenu () {
                this.menuVisible = !this.menuVisible
            },
            hideSidebar() {
                return true;
            },
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            },*/
        }
    }
</script>

<style lang="scss" scoped>

</style>