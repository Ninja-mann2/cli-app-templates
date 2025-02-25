import { shippingRates } from "@wix/ecom/service-plugins";

/**
 * Interface for defining shipping costs, based on the number of items or weight.
 * This is only an example, you should define your own logic
 */
export interface ShippingCosts {
  /** Cost for the first item/KG/LB. */
  first: number;

  /** Cost for the second item/KG/LB. */
  second: number;

  /** Cost for the third and subsequent items/KGs/LBs */
  thirdAndUp: number;
}

/**
 * Interface representing the shipping data specific to the application.
 * It is used in order to create the shipping methods required by the SPI
 */
export interface ShippingAppData {
  /** Array of shipping methods, each representing the cost of the order using this delivery method */
  shippingMethods: {
    /** Unique code for the shipping method. */
    code: string;

    /** Title of the shipping method to be presented to the user */
    title: string;

    /** Optional logistics information, i.e. `logistics.deliveryTime = "3-5 business days"` */
    logistics?: shippingRates.DeliveryLogistics;

    /** Cost details for the shipping method. */
    costs: ShippingCosts;
  }[];
}

/**
 * Interface representing a summary of an order.
 * This is used to display essential order details on the client side.
 */
export interface OrderSummary {
  /** Unique identifier for the order. */
  id: string;

  /** Formatted date string indicating when the order was created. */
  createdDate: string;

  /** Total price of the order */
  totalPrice: number;

  /** Currency code (e.g., "USD", "EUR") representing the currency of the order. */
  currency: string;
}
