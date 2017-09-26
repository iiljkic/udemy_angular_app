import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IngredientComponent } from './components/shopping_list/ingredient/ingredient.component';
import { ShoppingListComponent } from './components/shopping_list/shoppinglist/shoppinglist.component';
import { RecipeComponent } from './components/recipe_book/recipe/recipe.component';
import { RecipeDetailComponent } from './components/recipe_book/recipe_detail/recipedetail.component';
import { RecipeItemComponent } from './components/recipe_book/recipe_item/recipeitem.component';
import { RecipeListComponent } from './components/recipe_book/recipe_list/recipelist.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    IngredientComponent,
    ShoppingListComponent,
    RecipeComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    RecipeListComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
