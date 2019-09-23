import { Router } from 'express';
const router = Router();
import UsersController from '../controllers/users.controller';
import auth from '../middlewares/auth'

router.route('/')
			.get(auth,UsersController.getUsers)
			.post(UsersController.newUser);
router.route('/login')
			.post(UsersController.loginUser)
router.route('/:id')
			.get()
			.put()
			.delete()
module.exports = router ;