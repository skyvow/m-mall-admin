import RestBase from 'helpers/RestBase'

class Ctrl extends RestBase{
    constructor($scope, $state, $timeout, $ionicLoading, GoodsResource, $ionicSlideBoxDelegate){
        super('goods', $scope, $state, $timeout, $ionicLoading, GoodsResource)
        Object.assign(this, {
            $ionicSlideBoxDelegate,
        })
        this.init()
    }

    init() {
        this.goods.detail({
        	id: this.$state.params.id
        }).then(data => {
            this.$ionicSlideBoxDelegate.update()
        })
    }
}

Ctrl.$inject = [
    '$scope', 
    '$state', 
    '$timeout',
    '$ionicLoading',
    'GoodsResource',
    '$ionicSlideBoxDelegate',
] 

export default Ctrl