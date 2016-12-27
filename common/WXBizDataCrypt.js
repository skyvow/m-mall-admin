import crypto from 'crypto'

/**
 * 微信加密数据解密算法
 * 
 * @param appId {String} 敏感数据归属appid，开发者可校验此参数与自身appid是否一致
 * @param sessionKey {String} 会话密钥
 * 
 */
class WXBizDataCrypt {
	constructor(appId, sessionKey) {
		Object.assign(this, {
			appId, 
			sessionKey, 
		})
	}

	decryptData(_encryptedData, _iv) {
		// base64 decode
		let sessionKey = new Buffer(this.sessionKey, 'base64')
		let encryptedData = new Buffer(_encryptedData, 'base64')
		let iv = new Buffer(_iv, 'base64')
		let decoded, decipher

		try {
			// 解密
			decipher = crypto.createDecipheriv('aes-128-cbc', sessionKey, iv)
			
			// 设置自动 padding 为 true，删除填充补位
			decipher.setAutoPadding(true)
			decoded = decipher.update(encryptedData, 'binary', 'utf8')
			decoded += decipher.final('utf8')

			decoded = JSON.parse(decoded)

		} catch (err) {
			throw new Error('Illegal Buffer')
		}

		if (decoded.watermark.appid !== this.appId) {
			throw new Error('Illegal Buffer')
		}

		return decoded
	}
}

export default WXBizDataCrypt