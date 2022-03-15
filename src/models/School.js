class School {
    constructor(obj) {
        this._id = obj._id || null;

        this.id = obj.iid || '';
        this.type = obj.type || 'elementary';
        this.enable = obj.enable || '';
        this.name = obj.name || obj.schoolName || '';
        this.address = obj.address || '';
        this.latitude = obj.latitude || '';
        this.longitude = obj.longitude || '';
        this.municipality = obj.municipality || '';
        this.phoneNumber = obj.phoneNumber || '';
        this.fax = obj.fax || '';
        this.email = obj.email || '';
        this.foundedBy = obj.foundedBy || '';
        this.verifiedAt = obj.verifiedAt || '';
        this.language = obj.language || '';
        this.builtAt = obj.builtAt || '';
        this.buildingType = obj.buildingType || '';
        this.buildingArea = obj.buildingArea || '';
        this.gardenArea = obj.gardenArea || '';
        this.shifts = obj.shifts || '';
        this.heating = obj.heating || '';
        this.nrClasses = obj.nrClasses || '';
        this.nrStudents = obj.nrStudents || '';
        this.nrTeachers = obj.nrTeachers || '';
        this.nrClassrooms = obj.nrClassrooms || '';
        this.canteen = obj.canteen || '';
        this.library = obj.library || '';
        this.labs = obj.labs || '';
        this.labsMeta = obj.labsMeta || '';
        this.finances = obj.finances || null;
        this.rating = obj?.rating?.value || 0;
    }
}

export { School };