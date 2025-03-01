
/**
* CreatedBy    : Dinesh
* CreatedTime  : Jan 05 2022
* ModifiedBy   : Dinesh
* ModifiedTime : Jan 05 2022
* Description  : This file contains all the configurations needed for the service
**/

module.exports = class config {

	// Basic Configuration
	TMS_REST_DATA_ACCESS_NAME = "TMS-Rest-Data-Access!";
	TMS_REST_DATA_ACCESS_HOST = "localhost";
	TMS_REST_DATA_ACCESS_PORT = "3000";

	TMS_REST_DATA_ACCESS_USERNAME = "QP0192923232LD";
	TMS_REST_DATA_ACCESS_PASSWORD = "927NBGJJ0283HKA74782";

	// TMS-Rest-Data-Access datatabase Connection Configurations
	TMS_REST_DATA_ACCESS_DEFAULT_DATABASE_CONNECTION_ENABLED = true;

	TMS_REST_DATA_ACCESS_DATABASE_CONNECTIONS = {
		isDefault: true,
		databaseURL: "postgresql://tmsprojectdb_x7o0_user:Pe1itEKFAv2sdvyixyGlCR5K8ntn5XUy@dpg-cv18utjtq21c73cmgb2g-a.oregon-postgres.render.com/tmsprojectdb_x7o0",
		databaseName: "tmsprojectdb_x7o0"
	};
};