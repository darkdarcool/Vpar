class VPar {
	/**
	 * Loads a version to parser into VPar
	 *
	 * @param {String} version
	 */
	constructor(version) {
		this.version = this._removeLeadingChars(version);
	}

	/**
	 *
	 * @param {Boolean} splitIntoArray
	 */
	getVersion(splitIntoArray = false) {
		let version = this.version;
		if (!isNaN(version[0] && isNaN(version[version.length]))) { // has been properly stripped
			if (splitIntoArray) {
				return version.split(".");
			}
			return version;
		}
	}

	/**
	 * Removes leading chars
	 *
	 * @param {String} version
	 * @returns {String}
	 */
	_removeLeadingChars(version) {
		if (version.startsWith("v")) version = version.substring(1);
		// TODO: Add more leading chars that can be removed
		return version;
	}
}

export default VPar;
