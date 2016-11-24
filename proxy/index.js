import RestBase from './RestBase'
import banner from '../models/banner'
import classify from '../models/classify'
import goods from '../models/goods'
import cart from '../models/cart'
import address from '../models/address'
import order from '../models/order'
import user from './user'
import upload from './upload'

export default {
	banner  : new RestBase(banner), 
	classify: new RestBase(classify), 
	goods   : new RestBase(goods), 
	cart    : new RestBase(cart), 
	address : new RestBase(address), 
	order   : new RestBase(order), 
	user    : user, 
	upload  : upload, 
}