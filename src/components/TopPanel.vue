<template>
    <div class="TopPanel">
        <div class="MainNav">
            <ul>
                <li v-for="route in routes" :key="route.name">
                    <router-link :to="route.path">{{ route.name }}</router-link>
                </li>
            </ul>
        </div>
        <div class="Socials">
            <ul>
                <li>
                    <a href="https://www.reddit.com" rel="noopener noreferrer" target="_blank">
                        <img alt="Reddit" src="@/assets/Reddit Icon White.svg">
                    </a>
                </li>
                <li>
                    <a href="https://bsky.app/" rel="noopener noreferrer" target="_blank">
                        <img alt="Bluesky" src="@/assets/BskyLogo.svg">
                    </a>
                </li>
                <li>
                    <a href="https://www.subscribestar.com/" rel="noopener noreferrer" target="_blank">
                        <img alt="SubscribeStar" src="@/assets/SubscribeStar Icon Color.svg">
                    </a>
                </li>
                <li>
                    <a href="https://www.vimeo.com" rel="noopener noreferrer" target="_blank">
                        <img alt="Vimeo" src="@/assets/VideoHost.svg">
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TopPanel',
    data() {
        return {
            routes: [
                { name: 'Home', path: '/' },
                { name: 'Commissions', path: '/CommissionsView' },
                { name: 'Support', path: '/SupportView' },
                { name: 'Login', path: '/LoginView' },
                { name: 'Library', path: '/LibraryView' },
                { name: 'Portfolio', path: '/PortfolioView' },
            ],
        }
    },
}
</script>