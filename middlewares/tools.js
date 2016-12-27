import paginate from '../common/paginate'
import tools from '../common/tools'
import jwt from '../common/jwtauth'

export default function(req, res, next) {
	res.paginate = (...args) => new paginate(...args).init()
	res.tools = new tools(req, res)
	res.jwt   = jwt
	next()
}