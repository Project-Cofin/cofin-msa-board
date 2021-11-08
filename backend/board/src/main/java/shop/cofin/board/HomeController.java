package shop.cofin.board;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.text.SimpleDateFormat;
import java.util.Date;

@Controller
public class HomeController {
    @GetMapping("/")
    @ResponseBody
    public String home(){
        return new SimpleDateFormat("yyyy-MM-dd hh:mm:ss").format(new Date());
    }
}
