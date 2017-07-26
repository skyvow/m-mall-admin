class Ctrl {
    constructor($state, WebService, BannerResource, $ionicSlideBoxDelegate){
        Object.assign(this, {
            $state, 
            WebService, 
            BannerResource, 
            $ionicSlideBoxDelegate, 
        })
        
        this.init()
    }

    init() {
        this.getBanners()
    }

    getBanners() {
        this.banners = {}
        this.BannerResource.get({is_show: true}).$promise
        .then(data => {
            console.log(data)
            if (data.meta.code == 0) {
                this.banners.items = data.data.items
                this.$ionicSlideBoxDelegate.update()
            }
        })
    }
}

Ctrl.$inject = [
    '$state', 
    'WebService', 
    'BannerResource', 
    '$ionicSlideBoxDelegate', 
] 

export default Ctrl