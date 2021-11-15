package shop.cofin.board.user.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import shop.cofin.board.user.domain.UserDto;
import shop.cofin.board.user.repository.UserRepository;

import java.util.List;

@Service
public class UserServiceImpl implements UserService{
    @Autowired
    private UserRepository userRepository;

    @Override
    public boolean login(String userId, String userPw) {
        UserDto user = userRepository.selectOneUser(userId);
        if (user !=null){
            if (user.getUserPw().equals(userPw)){
                return true;
            }
        }
        return false;
    }

    @Override
    public boolean join(UserDto user) {
        if (userRepository.selectOneUser(user.getUserId())==null){
            userRepository.insertUser(user);
            return true;
        }
        return false;
    }

    @Override
    public void modify(UserDto user) {
        userRepository.updateUser(user);

    }

    @Override
    public void withdraw(String userId) {
        userRepository.deleteUser(userId);
    }

    @Override
    public UserDto getUser(String userId) {
        return userRepository.selectOneUser(userId);
    }

    @Override
    public List<UserDto> getUserList() {
        return userRepository.selectAllUser();
    }
}
