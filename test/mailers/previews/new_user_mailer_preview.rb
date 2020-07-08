# Preview all emails at http://localhost:3000/rails/mailers/new_user_mailer
class NewUserMailerPreview < ActionMailer::Preview

  # Preview this email at http://localhost:3000/rails/mailers/new_user_mailer/signup_confirmation
  def signup_confirmation
    @greeting
    NewUserMailer.signup_confirmation(@user)
  end

  # Preview this email at http://localhost:3000/rails/mailers/new_user_mailer/invite_friend
  def invite_friend
    NewUserMailer.invite_friend
  end

end
