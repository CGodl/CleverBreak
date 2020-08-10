Rails.application.routes.draw do
  root to: "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :bills, only: [:create, :destroy, :show, :index, :update]
    resources :comments, only: [:create, :destroy, :show, :index] 
    resources :friends, only: [:create, :destroy, :show, :index]
    resources :groups, only: [:create, :destroy, :show, :index]
    resources :users, only: [:create, :show, :index]
    resource :session, only: [:create, :destroy]
  end

  
end
