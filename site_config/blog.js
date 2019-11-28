export default {
    'en-us': {
        barText: 'Blog',
        postsTitle: 'All posts',
        list: [
            // {
            //     title: 'Your First Dubbo Demo',
            //     author: '@Yang Xinru',
            //     dateStr: 'August 7th，2018',
            //     desc: 'Your First Dubbo Demo',
            //     link: '/en-us/blog/dubbo-101.html',
            // }
        ]
    },
    'zh-cn': {
        barText: '博客',
        postsTitle: '所有文章',
        list: [
            {
                title: 'dubbogo中的TPS Limit设计与实现',
                author: '@flycash',
                dateStr: 'Nov 10th, 2019',
                desc: '在dubbogo中的TPS limit的设计与实现。讨论了目前已有的实现，以及可以扩展的接口。',
                link: '/zh-cn/blog/dubbogo-tps-limit-design-implementation.html',
            },
            {
                title: '要优雅退出吗？dubbogo给你',
                author: '@flycash',
                dateStr: 'Nov 21th, 2019',
                desc: '在dubbogo中的优雅退出的设计与实现。讨论了直接退出的存在问题，因此得出优雅退出所需的步骤。',
                link: '/zh-cn/blog/graceful-shutdown.html',
            },
        ]
    },
};
