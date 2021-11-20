package com.authentication.agent.mappers;

import com.authentication.agent.dto.UserDto;
import com.authentication.agent.dto.UserDto.UserDtoBuilder;
import com.authentication.agent.entity.User;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2021-10-03T12:44:27+0530",
    comments = "version: 1.4.1.Final, compiler: Eclipse JDT (IDE) 1.4.0.v20210708-0430, environment: Java 16.0.2 (Oracle Corporation)"
)
@Component
public class UserMapperImpl implements UserMapper {

    @Override
    public UserDto toUserDto(User user, String token) {
        if ( user == null && token == null ) {
            return null;
        }

        UserDtoBuilder userDto = UserDto.builder();

        if ( user != null ) {
            userDto.role( user.getRole() );
            userDto.username( user.getUsername() );
        }
        if ( token != null ) {
            userDto.token( token );
        }

        return userDto.build();
    }
}
