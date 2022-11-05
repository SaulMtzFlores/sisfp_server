import Role from '../routes/roles/model';
import User from '../routes/users/model';
import Center from '../routes/centers/model';
import Degree from '../routes/degrees/model';
import Subject from '../routes/subjects/model';

import roles from './json/roles';
import users from './json/users';
import centers from './json/centers';
import degrees from './json/degrees';
import subjects from './json/subjects';

export default async function () {

    await Role.deleteMany({});
    await Role.insertMany(roles);

    const countUsers = await User.countDocuments();
    if(countUsers === 0){
        await User.insertMany(users);
    }

    const countCenters = await Center.countDocuments();
    if(countCenters === 0){
        await Center.insertMany(centers);
    }

    const countDegrees = await Degree.countDocuments();
    if(countDegrees === 0){
        await Degree.insertMany(degrees);
    }

    const countSubjects = await Subject.countDocuments();
    if(countSubjects === 0){
        await Subject.insertMany(subjects);
    }
}