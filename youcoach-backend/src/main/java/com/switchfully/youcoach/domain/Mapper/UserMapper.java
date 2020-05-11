package com.switchfully.youcoach.domain.Mapper;


import com.switchfully.youcoach.datastore.entities.User;
import com.switchfully.youcoach.domain.dtos.CreateUserDto;
import com.switchfully.youcoach.domain.dtos.UserDto;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class UserMapper {

    public UserDto toUserDto(User user){
        return new UserDto(user.getId(),user.getFirstName(),user.getLastName(),user.getEmail(),user.getPassword());
    }

    public User toUser(CreateUserDto createUserDto){
        return new User(createUserDto.getFirstName(), createUserDto.getLastName(), createUserDto.getEmail(), createUserDto.getPassword());
    }

    public List<UserDto> toUserDto(List<User> users){
       return users.stream().map(this::toUserDto).collect(Collectors.toList());
    }

}