declare class VPar {
	/**
	 * The version to be manipulated
	 */
	private version: string;

	/**
	 * Loads a version into VPar so it can be manipulated
	 *
	 * @param version {String} The version the be manipulated
	 */
	constructor(version: string);

	/**
	 * The most basic version return method. Expects a very simple version like `process.version`
	 *
	 * @param splitIntoArray {Boolean} Optional. Dictates if the version should be split into an array (Split by "."). Defaults to `false`
	 *
	 * @example
	 * ```
	 * let vpar = new VPar(process.version); // process.version = v18.6.0
	 * vpar.getVersion(); // => 18.6.0
	 * ```
	 * @example
	 * ```
	 * let vpar = new VPar(process.version); // process.version = v18.6.0
	 * vpar.getVersion(true); // => ["18", "6", "0"]
	 * ```
	 */
	getVersion(splitIntoArray: boolean = false): string | Array<string>;


	// Private members
	/**
	 * Removes leading chars of a version
	 *
	 * THIS FUNCTION IS FOR INTERNAL USE ONLY
	 *
	 * @param version {String}
	 */
	private _removeLeadingChars(version: string);

}

export = VPar;
