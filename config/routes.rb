Rails.application.routes.draw do
  root to: "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show, :index]
    resources :bills, only: [:create, :destroy, :show, :index]
    resource :session, only: [:create, :destroy]
    resources :friends, only: [:create, :destroy, :show, :index]
  end

  
end
