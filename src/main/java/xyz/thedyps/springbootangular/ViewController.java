package xyz.thedyps.springbootangular;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class ViewController {

    @RequestMapping(path = "/goods/**")
    public String index() {
        return "forward:/index.html";
    }

    @RequestMapping(path = "/user/**")
    public String index2() {
        return "forward:/index.html";
    }
}