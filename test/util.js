'use strict';

function uncachedRequire(id) {
	delete require.cache[require.resolve(id)];
	return require(id);
}

function withEnv(key, value, fn) {
	var envVarMap, err;

	if (typeof key === 'object') {
		envVarMap = key;
		fn = value;
	} else {
		envVarMap = {};
		envVarMap[key] = value;
	}

	Object.keys(envVarMap).forEach(function setEnvVar(envKey) {
		process.env[envKey] = envVarMap[envKey];
	});

	try {
		fn();
	} catch(e) {
		err = e;
	} finally {
		Object.keys(envVarMap).forEach(function removeEnvVar(envKey) {
			delete process.env[envKey];
		});
	}

	if (err) {
		throw err;
	}
}

module.exports = exports = {
	withEnv: withEnv,
	uncachedRequire: uncachedRequire
};
