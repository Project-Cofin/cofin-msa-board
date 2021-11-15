package shop.cofin.board.user.repository;

import shop.cofin.board.user.domain.UserDto;

import java.util.List;

public interface UserRepository {
    public void insertUser(UserDto user);
    public void updateUser(UserDto user);
    public void deleteUser(String userId);
    public UserDto selectOneUser(String userId);
    public List<UserDto> selectAllUser();
}
