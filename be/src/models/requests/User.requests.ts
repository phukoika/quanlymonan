import { JwtPayload } from 'jsonwebtoken'
import { TokenType } from '~/constants/enums'

export interface LoginRequestBody {
  email: string
  password: string
}

export interface VerifyEmailRequestBody {
  email_verify_token: string
}

export interface RegisterReqBody {
  name: string
  email: string
  password: string
  confirm_password: string
  date_of_birth: string
}

export interface LogoutReqBody {
  refresh_token: string
}
export interface FotgotPasswordReqBody {
  email: string
}

export interface TokenPayload extends JwtPayload {
  user_id: string
  token_type: TokenType
}
