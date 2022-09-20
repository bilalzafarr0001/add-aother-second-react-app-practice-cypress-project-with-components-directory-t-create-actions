import * as LoginComponent from '../components/login_component';
import * as HeaderComponent from '../components/header_component';
import * as CourseComponent from '../components/course_component';
import * as Utils from '../support/utils';

describe('Test all login functionlaities', () => {
    beforeEach(() => {
        Utils.visitAPage('login');
    });

    it('should login correctly as normal user', () => {
        LoginComponent.performLogin('user', 'user');
        Utils.checkURL().should('contain', '/courses');
        HeaderComponent.logoutButton().should('be.visible');
    });

    it('should login correctly as admin user', () => {
        LoginComponent.performLogin('admin', 'admin');
        Utils.checkURL().should('contain', '/courses');
        HeaderComponent.logoutButton().should('be.visible');
        CourseComponent.deleteButton().should('be.visible');
    });
});
