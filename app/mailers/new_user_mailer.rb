class NewUserMailer < ApplicationMailer

  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.new_user_mailer.signup_confirmation.subject
  #
  def signup_confirmation
    @greeting = "Hi"

    mail to: "to@example.org"
  end

  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.new_user_mailer.invite_friend.subject
  #
  def invite_friend
    @greeting = "Hi"

    mail to: "to@example.org"
  end


  #   def new_user_welcome(user)
  #     @user = user
  
  #     mail(to: @user.email, 
  #          subject: 'Welcome to Cleverbreak',
           
  #          )
  
  
  
  
  
  #   end
  
  
  #   # def newFriend(user)
  #   #   @user = user
  #   #   @email_text = `Hello there, #{user} has just invited you to join Cleverbreak.`
  #   # end
    
  
  
  
  # end



end
