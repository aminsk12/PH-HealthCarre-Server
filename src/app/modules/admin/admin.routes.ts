import { Router } from "express";
import { adminController } from "./admin.controller";
import validateRequest from "../../middlewares/validateRequest";
import { adminValidateSchemas } from "./admin.validations";


const router = Router();




router.get('/', adminController.getAllAdmin)

router.get('/:id', adminController.getASingleAdmin)

router.patch(
    '/:id',
    validateRequest(
        adminValidateSchemas.adminUpdateValidate
    ),
    adminController.updateAdmin
)

router.delete('/:id', adminController.deleteAdmin)

router.delete('/soft/:id', adminController.softDeleteAdmin)

export const adminRoutes = router