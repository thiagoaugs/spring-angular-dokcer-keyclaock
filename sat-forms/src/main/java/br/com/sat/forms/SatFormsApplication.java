package br.com.sat.forms;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.extern.log4j.Log4j2;

@SpringBootApplication
@RestController
@Log4j2
public class SatFormsApplication {

	 @RequestMapping("/")
	  public String home() {
		 
		 log.trace("A TRACE Message");
	        log.debug("A DEBUG Message");
	        log.info("An INFO Message");
	        log.warn("A WARN Message");
	        log.error("An ERROR Message");
		  
	    return "Hello Docker World";
	  }
	 
	public static void main(String[] args) {
		SpringApplication.run(SatFormsApplication.class, args);
	}

}
