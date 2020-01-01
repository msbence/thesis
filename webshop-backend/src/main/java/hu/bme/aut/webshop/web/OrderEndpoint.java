package hu.bme.aut.webshop.web;

import hu.bme.aut.webshop.domain.Order;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/orders")
public class OrderEndpoint {

    private Logger logger = LoggerFactory.getLogger(OrderEndpoint.class);

    @PostMapping
    public Order save(@RequestBody Order o) {
        logger.info("Received order at the webshop application.");
        return o;
    }
}
