package com.microservices.coupons;

import org.junit.jupiter.api.Test;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotEquals;
import static org.mockito.Mockito.when;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;

import com.microservices.coupons.exceptions.CustomException;
import com.microservices.coupons.model.Company;
import com.microservices.coupons.repository.CompaniesRepository;
import com.microservices.coupons.services.AdminService;

import org.springframework.boot.test.context.SpringBootTest;
//import org.springframework.test.context.junit4.SpringRunner;
@RunWith(SpringRunner.class)
@SpringBootTest(classes=CouponServiceApplication.class)
class CouponServiceApplicationTests {
	@Autowired
	private AdminService administratorservice;
	@MockBean
	private CompaniesRepository companyrepository;
	@Test
	public void getAllCompaniesTest() throws CustomException {
				
	}

}
