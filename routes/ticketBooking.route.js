import { Router } from "express";
import {getSeats} from '../Controllers/ticketBooking.controller'

const route = new Router();

route.get('/', getSeats)

export default route;