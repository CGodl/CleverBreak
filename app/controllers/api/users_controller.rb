class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)

    if @user.save
      NewUserMailer.signup_confirmation(@user.email).deliver
      login(@user)
      render 'api/users/show' #API USERS SHOW 
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find_by(params[:id])
    render :show #API USERS SHOW. SAME AS 
  end

  def index
    @users = User.all
    render :index
  end

  private

  def user_params
    params.require(:user).permit(:email, :password, :name)
  end
end