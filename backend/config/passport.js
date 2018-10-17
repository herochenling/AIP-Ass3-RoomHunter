import { Strategy as JwtStrategy } from 'passport-jwt';
import { ExtractJwt } from 'passport-jwt';
import { getUserById } from '../models/user';
import { secret } from '../config/db';

/**
 *  reads the Jason Web Token from the http Authorization header
 */
export default function readToken(passport) {
    let opts = {};
    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('jwt');
    opts.secretOrKey = secret;
    passport.use(
        new JwtStrategy(opts, (jwt_payload, done) => {
            // payload include user info
            getUserById(jwt_payload.data._id, (err, user) => {
                // if there is error, return error
                if (err) {
                    return done(err, false); //done is a passport error first callback
                }
                // if there is a user found, return user, otherwise return false
                if (user) {
                    return done(null, user);
                } else {
                    return done(null, false);
                }
            });
        })
    );
}
