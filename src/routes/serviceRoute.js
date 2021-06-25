import express from 'express';
import {orderCreateController, updteOrderService,orderDetails, getOrderByEmail} from '../controller/orderController.js'
import {getAllReview, createReview} from '../controller/reviewController.js'
import { createService,getServices } from '../controller/serviceController.js';
import { handleValidations } from '../middlewares/handleValidation.js';
import permit from '../middlewares/permit.js';
import validators from '../validators/index.js'

const router = express.Router();

router.route('/order/create').post(orderCreateController)
router.route('/order/:id').put(updteOrderService).get(orderDetails)
router.route('/order/userorder').get(getOrderByEmail)

router.route('/review').post(createReview).get(getAllReview)
router.route('/service/create').post(createService)
router.route('/service').get(getServices)

const configure = (app) => {
    app.use('/api', router);
  }; 

  export default configure;