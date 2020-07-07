class NewUserMailer < ApplicationMailer
  default from: "signup@cleverbreak.com"

  def signup_confirmation(user)
    @user = user
    @greeting = `Hi #{user}`

    mail to: user.email, subject: "Welcome to Cleverbreak"
  end
  


  def invite_friend(user)
    @greeting = "Hi"
    
    @email_text = `Hello there, #{user.name} has just invited you to join Cleverbreak.`
  end

  
    # def newFriend(user)
    #   @user = user
    #   @email_text = `Hello there, #{user} has just invited you to join Cleverbreak.`
    # end
    
  
  
  
  # end



end
