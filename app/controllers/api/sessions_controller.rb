class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )

    if @user
      login(@user)
      render "api/session/"
    else
      render json: ["Whoops! We couldn’t find an account for that email address and password."], status: 401
    end
  end

  def destroy
    @user = current_user
    if @user
      logout
      render {}
    else
      render json: ["Nobody signed in"], status: 404
    end
  end
end